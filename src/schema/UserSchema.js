import BaseSchema from './BaseSchema';
import autoBind from 'auto-bind';
import Joi from 'joi';

export default class UserSchema extends BaseSchema {
  constructor(container) {
    super(container);
    // Had to do autobind as we are passing function and the execution context changes
    autoBind(this);
  }

  userRegistrationSchema (req, res, next) {
    const schema = this.joi.object({
        
    })
  }
}
