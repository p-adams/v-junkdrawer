import { RouteComponent } from "vue-router";
export function createErrorPage({
  path,
  name,
  component,
}: {
  path: string;
  name: string;
  component: RouteComponent;
}) {
  return {
    path: `${path}/:pathMatch(.*)`,
    name: name,
    component,
  };
}
