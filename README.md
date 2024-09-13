# WebStorm 2024.3 EAP Symlink issue

Reproducible issue with Symlinks, Yarn Workspaces, and local packages in WebStorm 2024.3 EAP

## Issue

When working in a mono-repo, being able to Ctrl+Click (or Goto Definition) on a type or imported variable
to jump to it's source is very helpful during development, especially with interconnected packages

In Webstorm 2024.2.3, since Symlinks are not fully supported, Ctrl+Click worked as expected. With the new
Symlink support, the navigation jumps to within the node_modules directory, which is excluded.

## Steps to reproduce

- remove node_modules and `yarn install`
  - Note: this is to force webstorm to refresh the index cache
- Expand `node_modules/@internal`
- verify that the local packages are...
  - Webstorm 2024.3 EAP: ...symlinked folders
  - Webstorm 2024.2.3: ...unknown files
- open `packages/package-a/src/index.ts`
- verify that the imports are found and there are no typescript errors
- Ctrl+Click on the PACKAGE_B_VALUE value import or the PackageB type import
- Attempt to change value

## What should happen

- Opens the editor to `packages/package-b/src/index.ts`
- File can be edited as normal

## What currently happens

- Webstorm 2024.3 EAP - #WS-243.12818.48
  - Ctrl-Click opens editor to `node_modules/@internal/package-b/src/index.ts`
  - Displays "You are editing a file that is ignored banner"
  - Attempting to edit displays "Non-Project Files Protection" dialog

- Webstorm 2024.2.3 - #WS-242.21829.149
  - Ctrl-Click opens editor to `packages/package-b/src/index.ts`
  - File can be edited as normal
