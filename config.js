const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logstar = function(message){
	console.info('this is the message',message);
};

export default {
	port:env.PORT||8080
}