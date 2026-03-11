# Project Master Directive

## Goal

Manage the GreenLoop 3.0 server implementation and development effectively.

## Instructions

1. This project follows the 3-Layer Architecture.
2. Put all executable tools and scripts in `execution/`.
3. Put temporary/intermediate files (such as database exports or test images) in `.tmp/`.
4. Update directives in the `directives/` directory when execution logic or project workflows change.

## Current Setup

- Simple Express.js backend defined in `server.js`.
- File uploads are managed via `multer` to the `uploads/` directory.
- A local database operates from `data.json`.
- Static files and app assets are located in `public/` and `views/`.
