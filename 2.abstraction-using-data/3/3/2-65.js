function union_set_as_tree(set1, set2) {
    const list1 = tree_to_list_2(set1);
    const list2 = tree_to_list_2(set2);
    return list_to_tree(union_set(list1, list2));
}
function intersection_set_as_tree(set1, set2) {
    const list1=tree_to_list_2(set1);
    const list2=tree_to_list_2(set2);
    return list_to_tree(intersection_set(list1, list2));
} 