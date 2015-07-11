/**
*	Entry point for the booking module
*
*	@author Lakha Singh
*/
require.config({
	paths: {
		'booking.cancel': './cancel/module',
		'booking.new': './new/module',
		'booking.bookings': './bookings'
	}
});

require([
	'booking'
], function(){});