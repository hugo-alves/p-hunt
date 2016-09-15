var Upvote = React.createClass({
  getInitialState: function() {
    return {
      problem: this.props.problem
    }
  },

  render: function() {
    var divClasses = classNames({
      "problem-upvote": true,
      "problem-upvote-upvoted": this.state.problem.up_voted
    });

    return (
      <div className={divClasses} onClick={this.handleClick}>
        <div className="problem-arrow"></div>
        <div className="problem-count">
          {this.state.problem.up_votes}
        </div>
      </div>
    );
  },
  handleClick: function() {
  var that = this;
  $.ajax({
    type: 'POST',
    url: Routes.upvote_problem_path(this.props.problem.id, { format: 'json' }),
    success: function(data) {
      that.setState({ problem: data });
    }
  });
}
});
