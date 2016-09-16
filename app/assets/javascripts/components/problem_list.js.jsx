var ProblemList = React.createClass({
  getInitialState: function() {
    return {
        $('.collapsible').on("click", function() {
          $(this).toggleClass("active");
    }
  }
  render: function() {
    return (
      <div>
        <ul className="collapsible popout" data-collapsible="accordion">
          {this.props.problems.map(function(problem){
            return <ProblemListItem problem={problem} key={problem.id} />;
          })};
        </ul>
      </div>
    );
  }
});
