import { supabase } from '../config/supabase.js';

export const findUserByEmail = async (email) => {
  return supabase.from('users').select('*').eq('email', email).single();
};

export const createUser = async (user) => {
  return supabase.from('users').insert([user]).select();
};

export const getAllUsers = async () => {
  return supabase.from('users').select('id,name,email,age,role,created_at');
};

export const getUserById = async (id) => {
  return supabase.from('users').select('*').eq('id', id).single();
};

export const updateUser = async (id, data) => {
  return supabase.from('users').update(data).eq('id', id).select();
};

export const deleteUser = async (id) => {
  return supabase.from('users').delete().eq('id', id);
};
