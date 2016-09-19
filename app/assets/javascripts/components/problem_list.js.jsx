var ProblemList = React.createClass({
  render: function() {
    return (
      <div className="container" >
        <ul className="collection" data-collapsible="accordion">
          {this.props.problems.map(function(problem){
            return <ProblemListItem problem={problem} key={problem.id} />;
          })}
        </ul>
      </div>
    );
  }
});
