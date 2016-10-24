import React from 'react';
import TodoList from './todo-list';
import'./index.css';

var Todo = React.createClass({
    getInitialState:function () {
        return({
            items:[
                {text:'get up',id:1},
                {text:'eat ',id:2}
            ],
            value:''
        })
    },
    render:function () {
        return(
            <div className="todoapp">
                <h1>Hello Work</h1>
                <header>
                    <input className="new-todo" placeholder="please input" value={this.state.value} onKeyDown={this.keydown} onChange={this.onChange}/>
                </header>
                <TodoList
                    items={this.state.items}
                    onDelete={this.onDelete}
                    onEdit={this.onEdit}
                />
            </div>
        )
    },
    keydown: function(e) {
        if (e && e.keyCode === 13) { // enter 键
            if (this.state.value!=='') {
                var items =this.state.items,
                    text = this.state.value;
                items.push({
                    text:text,
                    id:items.length+1
                });
                this.setState({
                    items:items,
                    value:''
                });
            }else{
                alert("Please don't enter an empty string")
            }
        }
    },
    onChange:function (e) {
        this.setState({
            value:e.target.value
        })
    },
    onDelete:function (o) {
        var items = this.state.items,
            newItems=[];
        for (var i = 0; i < items.length; i++) {
            if (items[i].id !== o.id) {
                newItems.push(items[i]);
            }
        };
        this.setState({
            items:newItems
        })
    },
    onEdit:function (o) {
    }
});
module.exports = Todo;
