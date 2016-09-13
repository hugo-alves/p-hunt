var ProblemListItem = React.createClass({
  render: function() {
    return (
      <div className="problem card-wide mdl-card mdl-shadow--2dp">
      <div className="problem-upvote">
        <Upvote problem={this.props.problem} />
      </div>
      <div className="mdl-card__title">
        <a href={Routes.problem_path(this.props.problem)} target="_blank">{this.props.problem.title}</a>
      </div>
      <div className="mdl-card__supporting-text">
        <p>{this.props.problem.description}</p>
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <p>{this.props.problem.name}</p>
      </div>
      <div className="mdl-card__menu">
        <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i className="material-icons">share</i>
        </button>
      </div>
    </div>
    );
  }
});
