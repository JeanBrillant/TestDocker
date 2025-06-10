const serverLink = 'http://localhost:3000/posts'

/**
 * 
 * @param {Object} data 
 */
export const createMessage = async (data) => {
    try {
        const response = await fetch(serverLink, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);
        return await response.json();
      } catch (error) {
        console.log('Erreur dans createMessage')
        throw new Error(`Erreur dans createMessage: ${error.message}`);
      }
}