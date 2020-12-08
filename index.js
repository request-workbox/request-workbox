const 
    axios = require('./src/services/axios'),
    api = require('./src/api/index');

module.exports = function(options) {
    if (!options) throw new Error('Missing configuration options.')

    // Create state object
    let state = {
        projectId: options.projectId || '',
    }
    
    // Attach axios instance
    const axiosInstance = axios(options.apiKey, options.staging)
    state.$axios = axiosInstance

    // return api
    return {
        ...api(state),
    }
}