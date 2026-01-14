{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "baseUrl": ".",
    "jsx": "preserve",
    "paths": {
      "@root/*": ["src/*"],
      "@styles/*": ["src/styles/*"],
      "@data/*": ["src/data/*"],
      "@stores/*": ["src/stores/*"],
      "@models/*": ["src/models/*"],
      "@templates/*": ["src/templates/*"],
      "@components/*": ["src/components/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["dist"]
}
