<html>
	<head>
	<!-- book.jsp -->
	</head>
	<body>
		<jsp:include page="navbar.jsp" />
		<div class="jumbotron">
	        <div class="container">
	          <h1 class="display-3">My Books!</h1>
	          <p>This selection of books I've read. Here I also review and rate them.</p>
	          <%/*<p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>*/%>
	        </div>
		</div>
		<div class="container text-center" id="tasksDiv">
			<h3>My books</h3>
			<hr>
			<div class="table-responsive">
				<table class="table table-striped table-bordered text-left">
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Description</th>
							<th>Date Created</th>
							<th>Finished</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</body>
</html>
<%/* TODO: remove if not needed
<c:choose>
		<c:when test="${mode == 'MODE_TASKS'}">
			
		</c:when>
		<c:when test="${mode == 'MODE_NEW' || mode == 'MODE_UPDATE'}">
			<div class="container text-center">
				<h3>Manage Task</h3>
				<hr>
				<form class="form-horizontal" method="POST" action="save-task">
					<input type="hidden" name="id" value="${book.id}" />
					<div class="form-group">
						<label class="control-label col-md-3">Name</label>
						<div class="col-md-7">
							<input type="text" class="form-control" name="name"
								value="${book.name}" />
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-md-3">Description</label>
						<div class="col-md-7">
							<input type="text" class="form-control" name="description"
								value="${book.description}" />
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-md-3">Finished</label>
						<div class="col-md-7">
							<input type="radio" class="col-sm-1" name="finished" value="true" />
							<div class="col-sm-1">Yes</div>
							<input type="radio" class="col-sm-1" name="finished"
								value="false" checked />
							<div class="col-sm-1">No</div>
						</div>
					</div>
					<div class="form-group">
						<input type="submit" class="btn btn-primary" value="Save" />
					</div>
				</form>
			</div>
		</c:when>
	</c:choose>
	*/ %>