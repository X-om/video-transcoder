CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE quality_types AS ENUM ('1440p','1080p','720p','480p','360p');
CREATE TYPE video_format AS ENUM ('mp4','avi','mov','wmv','mkv');

CREATE TABLE IF NOT EXISTS videos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL
  title VARCHAR(255) NOT NULL
  length NUMERIC(10,2) NOT NULL,
  quality quality_types DEFAULT '1080p',
  format video_format DEFAULT 'mp4',
  is_uploaded BOOLEAN DEFAULT FALSE,
  uploaded_at TIMESTAMP,
  is_transcoded BOOLEAN DEFAULT FALSE,
  transcoded_at TIMESTAMP
);

CREATE INDEX idx_videos_user_id ON videos(user_id);