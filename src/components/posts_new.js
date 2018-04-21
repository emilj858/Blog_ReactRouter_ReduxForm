import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';


class PostsNew extends Component {
    render() {
        const { fields: {title, categories, content}, handleSubmit } = this.props;
        // same as const handleSubmit = this.props.handleSubmit
        // same as const title = this.props.fields.title, categories, content


        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a new post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function validate(values) {
    const erros = {};

    return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispathToProps
// reduxform: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);