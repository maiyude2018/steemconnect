const React = require('react'),
    _ = require('lodash'),
    Dropzone = require('react-dropzone');

module.exports = (props) => {
    return <div className="cover pam" onClick={props.onClick} style={{ backgroundImage: `url(https://img.busy6.com/@${props.username}/cover) !important` }}>
        {props.onDrop ? <div>
            <Dropzone className="avatar" onDrop={(files) => props.onDrop(files, 'profile_image') } accept='image/*'>
                <a className="placeholder"><i className="icon icon-md material-icons">file_upload</i> Edit</a>
                <img src={`https://img.busy6.com/@${props.username}`}/>
            </Dropzone>
            <Dropzone className="cover-edit" onDrop={(files) => props.onDrop(files, 'cover_image') } accept='image/*'>
                <i className="icon icon-md material-icons">file_upload</i> Edit Cover
            </Dropzone>
        </div> : <div className="avatar">
                <img src={`https://img.busy6.com/@${props.username}`}/>
            </div>}
        {!!props.onDelete && <i
            style={{ position: 'absolute', right: 20, top: 70 }}
            className="icon icon-md material-icons"
            onClick={() => { event.preventDefault(); props.onDelete(props.username); return false; } }>delete </i>}
        {!!props.username && <h3> @{props.username}</h3>}
    </div>
};