var ProblemList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.problems.map(function(problem){
          return <ProblemListItem problem={problem} key={problem.id} />;
        })}
      </div>
    );
  }
});
