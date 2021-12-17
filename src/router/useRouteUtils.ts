import { useRouter } from "vue-router";
function useRouteUtils() {
  const router = useRouter();
  const sortedRoutes = () => {
    return router.getRoutes().sort((a, b) => {
      const path = a.path.toUpperCase();
      const nextPath = b.path.toUpperCase();
      if (path < nextPath) {
        return -1;
      }
      if (path > nextPath) {
        return 1;
      }

      return 0;
    });
  };

  const routes = (route: any) => {
    return route.path.split("/");
  };

  return {
    routes,
    sortedRoutes,
  };
}

export default useRouteUtils;
