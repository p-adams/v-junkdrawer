import { useRouter } from "vue-router";
function useRouteUtils() {
  const router = useRouter();
  const routes = router.getRoutes();

  const getChildren = () => {
    return routes.find((route) => route.children.length)?.children;
  };

  const mainCategories = () => {
    return routes.filter((route) => {
      const matchingChild = getChildren()?.find(
        (child) => child.name === route.name
      );

      return !!!matchingChild;
    });
  };

  // to enable expand sub-categories

  const mapRoutesToCategories = () => {
    const categories = new Map<string, { isExpanded: boolean }>();
    for (const route of router.getRoutes()) {
    }
  };

  return {
    mapRoutesToCategories,
    mainCategories,
  };
}

export default useRouteUtils;
