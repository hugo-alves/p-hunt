var ProblemListItem = React.createClass({
  render: function() {
    return (
    <div className="wrapper">
    <div className="problem-upvote">
      <Upvote problem={this.props.problem} />
    </div>
    <div className="problem mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title">
        <a href={Routes.problem_path(this.props.problem)} >{this.props.problem.title}</a>
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
    </div>
    );
  }
});
