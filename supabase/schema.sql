-- ==============================================================================
-- SUPABASE SCHEMA FOR GRADUATION INVITATION GUEST WISHES
-- Table: public.guest_wishes
-- ==============================================================================

-- 1. Create the guest_wishes table
CREATE TABLE IF NOT EXISTS public.guest_wishes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guest_name TEXT NOT NULL CHECK (char_length(trim(guest_name)) > 0 AND char_length(guest_name) <= 100),
    message TEXT NOT NULL CHECK (char_length(trim(message)) > 0 AND char_length(message) <= 1000),
    attendance TEXT DEFAULT 'Tôi chắc chắn sẽ đến',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create index on created_at for fast descending feed loading
CREATE INDEX IF NOT EXISTS idx_guest_wishes_created_at ON public.guest_wishes (created_at DESC);

-- 3. Enable Row Level Security (RLS) to enforce safety
ALTER TABLE public.guest_wishes ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Allow public read access to guest wishes
-- Notice: Anyone can read congratulations messages
DROP POLICY IF EXISTS "Allow public read access to guest wishes" ON public.guest_wishes;
CREATE POLICY "Allow public read access to guest wishes"
    ON public.guest_wishes
    FOR SELECT
    USING (true);

-- 5. Policy: Allow anonymous visitors to submit a wish
-- Enforces non-empty name and message constraints at the database level
DROP POLICY IF EXISTS "Allow anonymous submission of guest wishes" ON public.guest_wishes;
CREATE POLICY "Allow anonymous submission of guest wishes"
    ON public.guest_wishes
    FOR INSERT
    WITH CHECK (
        char_length(trim(guest_name)) > 0 AND 
        char_length(trim(message)) > 0
    );

-- 6. Deny UPDATE and DELETE by anonymous visitors (Only admin/service role can delete)
-- (By not creating UPDATE/DELETE policies for public, Supabase RLS automatically denies them)

-- ==============================================================================
-- Test insert (Optional verification in Supabase SQL Editor):
-- INSERT INTO public.guest_wishes (guest_name, message) 
-- VALUES ('Thế Anh', 'Chúc mừng tốt nghiệp rực rỡ!');
-- ==============================================================================
