const serverLink = 'http://localhost:3000/posts'

/**
 * 
 * @param {Object} data 
 */
exports.createMessage = async (data) => {
    fetch(serverLink, {
        method : 'post',
        body : JSON.stringify(data)
    })
}