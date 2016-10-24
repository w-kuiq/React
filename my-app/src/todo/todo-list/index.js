import React from 'react';

var TodoList = React.createClass({
    render(){
        var _this = this;
        var nodes = this.props.items.map(function (o,i) {
            return(
                <li key={o.id}>
                    <div>
                        <label onDoubleClick={_this.edit.bind(_this,0)} >{o.text}</label>
                        <button className="destroy" onClick={_this.delete.bind(_this,o)}></button>
                    </div>
                    <input className="edit" value={o.text}/>
                </li>
            )
        });
        return(
            <section className="main">
                <ul className="todo-list">
                    {nodes}
                </ul>
            </section>
        )
    },
    delete:function (o) {
        this.props.onDelete(o);
    },
    edit:function (o) {
        this.props.onEdit(o);
    },

});
module.exports = TodoList;
