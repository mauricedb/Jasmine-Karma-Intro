/**
 * Created by mauriceb on 2-2-2015.
 */

// https://github.com/jakerella/jquery-mockjax

describe('jQuery AJAX demos', function () {
    'use strict';

    var sut = {
        loadData: function (id) {
            return $.getJSON('/api/books/' + id);
        }
    };

    beforeEach(function () {
        $.mockjaxSettings.logging = false;
        $.mockjax.clear();

        $.mockjax({
            url: '/api/books/42',
            responseText: {title: 'The Hitchhikers Guide to the Galaxy', author: 'Douglas Adams'}
        });

        $.mockjax({
            url: '/api/books/13',
            status: 404,
            statusText: 'Not found'
        });
    });

    it('loads movie 42', function (done) {
        sut.loadData(42).then(function (e) {
            expect(e).toEqual({title: 'The Hitchhikers Guide to the Galaxy', author: 'Douglas Adams'});
            done();
        });
    });

    it('fails to load movie 13', function (done) {

        sut.loadData(13).error(function (err) {
            expect(err.status).toBe(404);
            expect(err.statusText).toBe('Not found');
            done();
        });
    });
});