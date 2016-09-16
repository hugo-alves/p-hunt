var ProblemListItem = React.createClass({
  render: function() {
    return (
      <li className="collection-item">
        <span>
          <a href={Routes.problem_path(this.props.problem)} >{this.props.problem.title}</a>
        </span>
        <Upvote problem={this.props.problem}  />
        <p>By: {this.props.problem.name}</p>
      </li>
    );
  }
});
