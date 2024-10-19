import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wqjdnbfihtjxhxfyjlrh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxamRuYmZpaHRqeGh4ZnlqbHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMTkxODcsImV4cCI6MjA0NDg5NTE4N30.JhM90Zy2Ypj8gKj3kYZAqXmptvWoeFtdfLRFljPKpm4";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
