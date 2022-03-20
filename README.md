# Install the dependecies (in the root directory)

```bash
npm install
```

## Create an env File

To run the Supabase client, create a .env file in the root folder and add 

```bash
VITE_PUBLIC_SUPABASE_URL={supabaseApiUrl}
VITE_PUBLIC_SUPABASE_ANON_KEY={supabaseApiPublicAnonKey}
```

## Create a content table in supabase 
Go to https://supabase.com/docs/guides/database/tables and follow the guide to
create a table named 'content' with 5 rows : Fname (text), email(text), phone(text), message(text), user_id(uuid)


## Start the server

```bash
npm run dev
```

## Building

To Build

```bash
npm run build
```


