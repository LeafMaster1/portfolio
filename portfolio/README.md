# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment to GitHub Pages

1. **Create a GitHub Repository**: Create a new repository on GitHub (e.g., `my-portfolio`).
2. **Update `package.json`**:
   - Open `package.json`.
   - Find the `"deploy"` script.
   - Replace `<repo-name>` with your actual repository name.
     Example: `ng build --configuration production --base-href /my-portfolio/ ...`
   - If you are deploying to a user site (username.github.io), remove the `--base-href` flag entirely or set it to `/`.
3. **Run Deployment**:
   ```bash
   npm run deploy
   ```
   This command will build the project and push the `dist/portfolio/browser` folder to the `gh-pages` branch of your repository.

## Adding Projects

To add more projects to the portfolio, edit `src/app/components/projects/projects.ts` and add objects to the `projects` array.