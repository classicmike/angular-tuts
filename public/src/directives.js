angular.Module('ContactsApp')
    .value('FieldTypes', {
        text: ['Text', 'should be a text'],
        email: ['Email', 'should be an email address'],
        number: ['Number', 'should be a number'],
        date: ['Date', 'should be a date'],
        datetime: ['Datetime', 'should be a datetime'],
        month: ['Month', 'should be a month'],
        week: ['Week', 'should be a week'],
        url: ['Url', 'should be a URL'],
        tel: ['Phone Number', 'should be a phone number'],
        color: ['Color', 'should be a color']
    });