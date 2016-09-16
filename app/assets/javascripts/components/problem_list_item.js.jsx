var ProblemListItem = React.createClass({
  render: function() {
    return (
      <li className="collection-item">
        <span>
          <a className="title"href={Routes.problem_path(this.props.problem)} >{this.props.problem.title}</a>
        </span>
        <Upvote problem={this.props.problem}  />
        <p className="author">By: {this.props.problem.name}</p>
      </li>
    );
  }
});
