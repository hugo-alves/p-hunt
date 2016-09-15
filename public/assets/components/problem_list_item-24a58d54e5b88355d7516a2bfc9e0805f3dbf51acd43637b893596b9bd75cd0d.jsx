var ProblemListItem = React.createClass({
  render: function() {
    return (
    <div className="wrapper">
      <div className="problem-upvote">
        <Upvote problem={this.props.problem} />
      </div>
      <div className="problem mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title">
          <h1><a href={Routes.problem_path(this.props.problem)} >{this.props.problem.title}</a></h1>
            <a><i className="material-icons">share</i></a>
        </div>
        <div className="mdl-card--content">
          <p>{this.props.problem.description}</p>

        </div>
        <div className="mdl-card__actions mdl-card--border">
          <footer>
            <p>By: {this.props.problem.name}</p>
          </footer>
        </div>
      </div>
    </div>
    );
  }
});
