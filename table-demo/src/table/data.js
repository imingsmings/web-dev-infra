const generateNodes = (start, end) => {
    const list = []

    for (let i = start; i < end; i++) {
        list.push({
            id: `id - ${i}`,
            name: `Shopping List - ${i}`,
            deadline: `${Date.now()} - ${i}`,
            type: `Task - ${i}`,
            isComplete: true,
            createUser: 'Jason Wang',
            loginTime: 'dsafsfsfsfweiswjifohswioefhwoi'
        })
    }

    return list
}

export default generateNodes(1, 100)
