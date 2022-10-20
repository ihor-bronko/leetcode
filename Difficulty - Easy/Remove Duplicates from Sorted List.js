// 83. Remove Duplicates from Sorted List

const deleteDuplicates = head => {
	let cur = head

	while (cur && cur.next) {
		if (cur.val === cur.next.val) {
			cur.next = cur.next.next
		} else {
			cur = cur.next
		}
	}
	return head
}

console.log(deleteDuplicates([1, 1, 2, 3, 3]))
