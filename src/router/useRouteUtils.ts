import { useRouter, RouteRecordNormalized } from "vue-router";
import { onMounted, ref } from "vue";
function useRouteUtils() {
  const router = useRouter();
  const routes = router.getRoutes();
  const expandableCategories = ref(new Map<string, boolean>());

  onMounted(() => {
    for (const mainCategory of mainCategories()) {
      expandableCategories.value.set(mainCategory.path, false);
    }
  });

  const getExpandableCategory = (route: RouteRecordNormalized) => {
    return expandableCategories.value.get(route.path);
  };

  const toggleCategoryExpanded = (route: RouteRecordNormalized) => {
    expandableCategories.value.set(route.path, !getExpandableCategory(route));
  };

  const mainCategories = () => {
    return routes.filter((route) => {
      return route.path.split("/").length === 2;
    });
  };

  return {
    getExpandableCategory,
    toggleCategoryExpanded,
    mainCategories,
  };
}

export default useRouteUtils;
