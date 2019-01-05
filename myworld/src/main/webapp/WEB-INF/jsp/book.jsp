<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

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
		<div class="container">
			<c:forEach var="book" items="${books}">
			  	<div class="card border-secondary mb-3" style="max-width: 20rem;">
				  <div class="card-header">Author</div>
				  <div class="card-body">
				    <h4 class="card-title">${book.name}</h4>
				    <p class="card-text">${book.description}</p>
				    <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
				  </div>
				</div>
			</c:forEach>
		</div>
	</body>
</html>

<%/* TODO: remove if not needed
<div class="container">
<div class="row">
	<c:forEach var="book" items="${books}">
		<div class="col-md-4">
	        <h2>${book.name}</h2>
	        <p>${book.description}</p>
	        <p><fmt:formatDate pattern="yyyy-MM-dd" value="${book.changedAt}"/></p>
	        <!-- TODO: implement detail view<p><a class="btn btn-secondary" href="#" role="button">View details »</a></p> -->
	      </div>
	</c:forEach>
</div>
<hr>
</div>


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