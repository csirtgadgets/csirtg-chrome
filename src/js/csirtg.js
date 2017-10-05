var CSIRTG = {
    get: function(args) {
        function setHeaders (xhr) {
            xhr.setRequestHeader('Authorization', 'Token token=' + args.token);
            xhr.setRequestHeader('Accept', 'application/vnd.csirtg.v1');
        }
        return $.ajax({
            url: args.remote,
            type: 'GET',
            dataType: 'json',
            success: args.success,
            error: args.error,
            beforeSend: setHeaders
        });
    },

    post: function(args) {
        function setHeaders(xhr) {
            xhr.setRequestHeader('Authorization', 'Token token=' + args.token);
            xhr.setRequestHeader('Accept', 'application/vnd.csirtg.v1');
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        data = JSON.stringify({ indicator: args.data });
        $.ajax({
            url: args.remote,
            type: 'POST',
            dataType: 'json',
            success: args.success,
            error: args.error,
            beforeSend: setHeaders,
            data: data
        });
    },

    submit: function (args) {
        args.remote = 'https://csirtg.io/api';
        args.remote += '/users/' + args.user + '/feeds';
        args.remote += '/' + args.feed + '/indicators';

        return this.post(args);
    },

    feeds: function (args) {
        args.remote = 'https://csirtg.io/api';
        args.remote += '/users/' + args.user + '/feeds';
        return this.get(args);
    },

    search: function(args) {
        args.remote = args.remote + '/search';
        args.remote += '?q=' + args.q;

        if (args.limit) {
            args.remote += '&limit=' + args.limit
        }
        this.get(args);
    }
};
