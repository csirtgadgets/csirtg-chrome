var CSIRTG = {
    get: function(args) {
        function setHeaders (xhr) {
            xhr.setRequestHeader('Authorization', 'Token token=' + args.token);
            xhr.setRequestHeader('Accept', 'application/vnd.csirtg.v1');
        }
        $.ajax({
            url: args.remote,
            type: 'GET',
            dataType: 'json',
            success: args.success,
            error: args.error,
            beforeSend: setHeaders,
            cache: args.cache || false
        });
    },

    post: function(args) {
        function setHeaders(xhr) {
            xhr.setRequestHeader('Authorization', 'Token token=' + args.token);
            xhr.setRequestHeader('Accept', 'application/vnd.csirtg.v1');
        }

        $.ajax({
            url: args.remote,
            type: 'POST',
            dataType: 'json',
            success: args.success,
            error: args.error,
            beforeSend: setHeaders,
            data: JSON.stringify(args.data)
        });
    },

    feeds: function (args) {
        args.remote += args.remote + '/users/' + args.user;
        args.remote += '/feeds/' + args.feed;
        this.get(args);
    },

    search: function(args) {
        args.remote = args.remote + '/search';
        args.remote += '?q=' + args.q

        if (args.limit) {
            args.remote += '&limit=' + args.limit
        }
        this.get(args);
    }
};
