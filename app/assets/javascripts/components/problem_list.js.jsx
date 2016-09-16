var ProblemList = React.createClass({
  render: function() {
    return (
      <div>
        <ul className="collapsible popout" data-collapsible="accordion">
          {this.props.problems.map(function(problem){
            return <ProblemListItem problem={problem} key={problem.id} />;
          })}
        </ul>
      </div>
    );
  }
});
