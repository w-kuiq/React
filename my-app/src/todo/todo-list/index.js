import React from 'react';

var TodoList = React.createClass({
    render(){
        var _this = this;
        var nodes = this.props.items.map(function (o,i) {
            return(
                <li key={o.id}>
                    <div>
                        <label>{o.text}</label>
                        <button className="destroy" onClick={_this.delete.bind(_this,o)}></button>
                    </div>
                </li>
            )
        })
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

});
module.exports = TodoList;
