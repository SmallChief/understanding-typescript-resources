/// <reference path="./models/drag-drop.ts" />
/// <reference path="./models/project.ts" />
/// <reference path="./state/project-state.ts" />
/// <reference path="./util/validation.ts" />
/// <reference path="./decorators/autobind.ts" />
/// <reference path="./components/base-component.ts" />
/// <reference path="./components/project-item.ts" />
/// <reference path="./components/project-list.ts" />
/// <reference path="./components/project-input.ts" />

/**
 * IMPORTANT
 * Referencing alone does not import the code.
 * You need to ensure that the TypeScript compiler is aware of these files.
 *
 * To do this, we can use the `--outFile` or `--outDir` compiler options to bundle your files together.
 */

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
