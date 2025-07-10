
-- Create a table for storing waiting list emails
CREATE TABLE public.waiting_list (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT NOT NULL DEFAULT 'landing_page',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_subscribed BOOLEAN NOT NULL DEFAULT true
);

-- Create an index on email for faster lookups
CREATE INDEX idx_waiting_list_email ON public.waiting_list(email);

-- Create an index on created_at for sorting
CREATE INDEX idx_waiting_list_created_at ON public.waiting_list(created_at DESC);

-- Enable Row Level Security (optional - makes the table publicly readable/writable for now)
ALTER TABLE public.waiting_list ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert emails (for the waiting list form)
CREATE POLICY "Anyone can join waiting list" 
  ON public.waiting_list 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy that allows reading all emails (you can restrict this later if needed)
CREATE POLICY "Anyone can view waiting list" 
  ON public.waiting_list 
  FOR SELECT 
  USING (true);
