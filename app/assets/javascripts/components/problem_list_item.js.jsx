var ProblemListItem = React.createClass({
  render: function() {
    return (
      <div className="problem card-wide mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">{this.props.problem.title}</h2>
      </div>
      <div className="mdl-card__supporting-text">
        <p>{this.props.problem.description}</p>
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          {this.props.problem.name}
        </a>
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
