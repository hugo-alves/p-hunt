var ProblemListItem = React.createClass({
  render: function() {
    return (
      <li>
        <div className="collapsible-header">
          <div className="problem-upvote">
            <Upvote problem={this.props.problem} />
          </div>
          {this.props.problem.title}
        </div>
        <div className="collapsible-body">
          <p>{this.props.problem.description}</p>
          <p>By: {this.props.problem.name}</p>
        </div>
      </li>
    );
  }
});
