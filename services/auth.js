import { supabase } from "../lib/supabaseClient"


export const signInWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signIn({
        provider: 'google',
    })
}