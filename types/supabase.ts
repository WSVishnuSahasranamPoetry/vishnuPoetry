export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      poetry: {
        Row: {
          class: string
          created_at: string
          id: string
          text: string
          updated_at: string
        }
        Insert: {
          class: string
          created_at?: string
          id?: string
          text: string
          updated_at?: string
        }
        Update: {
          class?: string
          created_at?: string
          id?: string
          text?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          updated_at: string
          username: string
        }
        Insert: {
          created_at?: string
          id?: string
          updated_at?: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      sahasranam: {
        Row: {
          created_at: string
          id: string
          name: string
          text: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          text: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          text?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
