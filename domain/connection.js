const { createClient } = require('@supabase/supabase-js');
const config = require('../config');

function client() {
    return createClient(config.SUPABASE.URL, config.SUPABASE.KEY);
}

module.exports = client;
