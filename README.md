# Hono Better Auth Example 1

Use bun as the package manager.

Auth spec at http://localhost:3000/api/auth/reference

Email carlton.joseph@gmail.com test password password123

Avatar pic https://avatars.githubusercontent.com/carltonj2000

## Creation History

```bash
bun create hono@latest hono-better-auth-ex1
cd hono-better-auth-ex1
# db
bun add drizzle-orm pg
bun add -D drizzle-kit @types/pg
bun add drizzle-seed
# auth
bun add better-auth
bunx @better-auth/cli@latest secret # generate secret
bun auth:gen:mig # add generated schema to ./src/db/schema.ts
bun db:gen:mig  # create sql from schema.ts
bun db:mig  # apply sql to db
# open web link in browser from cli for scripts/shorcuts/remembering
bun add -D open-cli
# mail client
bun add form-data
bun add mailgun.js
```

## Notes

```bash
git checkout -b hone-better-auth-wip
```
