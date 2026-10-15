import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { sanitizeText } from '../utils/guest';

export interface GuestWish {
  id: string;
  guest_name: string;
  message: string;
  created_at: string;
}

const LOCAL_STORAGE_KEY = 'theanh_graduation_guest_wishes';

// Default initial warm wishes for initial presentation
const DEFAULT_WISHES: GuestWish[] = [
  {
    id: 'default-1',
    guest_name: 'Minh Tuấn',
    message: 'Chúc mừng Tân cử nhân Nguyễn Thế Anh! Chúc em luôn vững bước và gặt hái thật nhiều thành công trên con đường sự nghiệp phía trước!',
    created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: 'default-2',
    guest_name: 'Thanh Thảo',
    message: 'Chúc mừng Thế Anh đã hoàn thành xuất sắc chặng đường đại học tại FPT Cần Thơ! Tự hào về bạn rất nhiều!',
    created_at: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
];

/**
 * Retrieves saved wishes from localStorage
 */
function getLocalWishes(): GuestWish[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return DEFAULT_WISHES;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_WISHES;
  } catch (err) {
    console.warn('Could not read wishes from localStorage:', err);
    return DEFAULT_WISHES;
  }
}

/**
 * Saves wishes array to localStorage
 */
function saveLocalWishes(wishes: GuestWish[]): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishes));
  } catch (err) {
    console.warn('Could not save wishes to localStorage:', err);
  }
}

/**
 * Fetches all public guest wishes from Supabase or local storage fallback
 */
export async function fetchGuestWishes(): Promise<GuestWish[]> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from('guest_wishes')
        .select('id, guest_name, message, created_at')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        console.error('Supabase fetch error, using local fallback:', error);
        return getLocalWishes();
      }

      if (data && data.length > 0) {
        return data as GuestWish[];
      }
      return getLocalWishes();
    } catch (err) {
      console.error('Error fetching wishes from Supabase:', err);
      return getLocalWishes();
    }
  }

  // Fallback to local storage
  return getLocalWishes();
}

/**
 * Submits a new guest wish to online database (Supabase) and local storage
 */
export async function submitGuestWish(
  rawName: string,
  rawMessage: string,
  rawAttendance: string = 'Tôi chắc chắn sẽ đến'
): Promise<{ success: boolean; wish?: GuestWish; error?: string }> {
  const guest_name = sanitizeText(rawName, 60);
  const message = sanitizeText(rawMessage, 500);
  const attendance = sanitizeText(rawAttendance, 50);

  if (!guest_name) {
    return { success: false, error: 'Vui lòng nhập tên của bạn.' };
  }

  if (!message) {
    return { success: false, error: 'Vui lòng nhập lời chúc của bạn.' };
  }

  const newWish: GuestWish = {
    id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `wish-${Date.now()}`,
    guest_name,
    message,
    created_at: new Date().toISOString(),
  };

  // 1. If Supabase is configured, submit to database
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from('guest_wishes')
        .insert([
          {
            guest_name,
            message,
            attendance,
          },
        ])
        .select('id, guest_name, message, created_at')
        .single();

      if (error) {
        console.error('Supabase insert error, saving locally:', error);
        // Save locally as backup
        const current = getLocalWishes();
        saveLocalWishes([newWish, ...current]);
        return { success: true, wish: newWish };
      }

      // Also update local cache
      const current = getLocalWishes();
      saveLocalWishes([data as GuestWish, ...current]);
      return { success: true, wish: data as GuestWish };
    } catch (err: unknown) {
      console.error('Supabase submission exception:', err);
      const current = getLocalWishes();
      saveLocalWishes([newWish, ...current]);
      return { success: true, wish: newWish };
    }
  }

  // 2. Local fallback if Supabase credentials are not configured yet
  const current = getLocalWishes();
  saveLocalWishes([newWish, ...current]);
  return { success: true, wish: newWish };
}
