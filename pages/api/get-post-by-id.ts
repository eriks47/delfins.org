import { supabase } from "../../services/supabaseClient";

export default async (req: any, res: any) => {
  const { data, error, status } = await supabase.from("feed").select("id");
  res.status(200).json({ data: data });
};
