/*
  # Initial schema setup for real estate management

  1. New Tables
    - properties
      - id (uuid, primary key)
      - title (text)
      - type (text)
      - price (numeric)
      - area (numeric)
      - area_unit (text)
      - location (text)
      - facing (text)
      - description (text)
      - features (text[])
      - image_url (text)
      - is_featured (boolean)
      - created_at (timestamptz)
      - updated_at (timestamptz)

    - brochures
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - thumbnail_url (text)
      - file_url (text)
      - created_at (timestamptz)
      - updated_at (timestamptz)

    - inquiries
      - id (uuid, primary key)
      - name (text)
      - email (text)
      - phone (text)
      - message (text)
      - property_interest (text)
      - status (text)
      - created_at (timestamptz)
      - updated_at (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add policies for public access where needed
*/

-- Properties Table
CREATE TABLE properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL,
  price numeric NOT NULL,
  area numeric NOT NULL,
  area_unit text NOT NULL,
  location text NOT NULL,
  facing text,
  description text,
  features text[],
  image_url text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

-- Public can view properties
CREATE POLICY "Properties are viewable by everyone" ON properties
  FOR SELECT USING (true);

-- Only authenticated users can manage properties
CREATE POLICY "Authenticated users can manage properties" ON properties
  FOR ALL USING (auth.role() = 'authenticated');

-- Brochures Table
CREATE TABLE brochures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  thumbnail_url text,
  file_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE brochures ENABLE ROW LEVEL SECURITY;

-- Public can view brochures
CREATE POLICY "Brochures are viewable by everyone" ON brochures
  FOR SELECT USING (true);

-- Only authenticated users can manage brochures
CREATE POLICY "Authenticated users can manage brochures" ON brochures
  FOR ALL USING (auth.role() = 'authenticated');

-- Inquiries Table
CREATE TABLE inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text,
  property_interest text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Only authenticated users can view inquiries
CREATE POLICY "Authenticated users can view inquiries" ON inquiries
  FOR SELECT USING (auth.role() = 'authenticated');

-- Anyone can create inquiries
CREATE POLICY "Anyone can create inquiries" ON inquiries
  FOR INSERT WITH CHECK (true);

-- Only authenticated users can update inquiries
CREATE POLICY "Authenticated users can update inquiries" ON inquiries
  FOR UPDATE USING (auth.role() = 'authenticated');